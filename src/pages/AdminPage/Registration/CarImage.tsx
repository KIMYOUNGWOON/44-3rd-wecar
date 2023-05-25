import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { TitleBox, GuidanceNotes } from './Registration';
import { HOST_ADDRESS } from '../../../HostAddress';
import { FileData } from './Registration';

interface CarImageProps {
  fileData: FileData[];
  setFileData: React.Dispatch<React.SetStateAction<FileData[]>>;
}

const CarImage: React.FC<CarImageProps> = ({ fileData, setFileData }) => {
  async function fetchSignedURL() {
    try {
      const response = await axios.get(`${HOST_ADDRESS}/utils/aws/signedurl`);
      const signedURL = response.data.signedUrl; // 서버에서 반환한 Signed URL
      return signedURL;
    } catch (error) {
      console.error('Failed to fetch Signed URL:', error);
      throw error;
    }
  }

  async function uploadFile(file: File) {
    try {
      const signedURL = await fetchSignedURL(); // Signed URL을 받아옴

      // Signed URL을 사용하여 파일 업로드
      await axios
        .put(signedURL, file, {
          headers: {
            'Content-Type': file.type,
          },
        })
        .then(response => {
          const { config } = response;
          const imageUrl = config.url?.slice(0, config.url.indexOf('?'));
          setFileData([
            ...fileData,
            {
              name: config.data.name,
              type: config.data.type,
              url: imageUrl,
            },
          ]);
        });
    } catch (error) {
      console.error('Failed to upload file:', error);
      throw error;
    }
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      uploadFile(file);
    }
  };

  const addImageData = fileData.slice(1);

  return (
    <CarImageContainer>
      <TitleBox>
        차량 이미지 <span>•</span>
      </TitleBox>
      <RepresentativeImage>
        <SubTitle>대표 이미지</SubTitle>
        <div>
          {fileData.length !== 0 && <PreviewImage src={fileData[0]?.url} />}
          <ImageUpload
            id="upload"
            name="uploadImg"
            type="file"
            onChange={handleFileUpload}
          />
          {fileData.length === 0 && (
            <ImageUploadLabel htmlFor="upload">
              <PlusIcon>+</PlusIcon>
            </ImageUploadLabel>
          )}
          <GuidanceNotes>
            권장 크기 : 1000 x 1000 (윈도 대상 750 x 1000)
          </GuidanceNotes>
          <GuidanceNotes>
            대표이미지 기준 1000 x 1000 이상 이미지를 등록하시면, 이미지 확대
            기능이 제공됩니다.
          </GuidanceNotes>
        </div>
      </RepresentativeImage>
      <AdditionalImages>
        <SubTitle>추가 이미지</SubTitle>
        <div>
          <ImageContainer>
            {addImageData.map(data => {
              return <PreviewImage key={data.name} src={data.url} />;
            })}
            <ImageUpload
              id="addUpload"
              name="uploadImg"
              type="file"
              onChange={handleFileUpload}
            />
            <ImageUploadLabel htmlFor="addUpload">
              <PlusIcon>+</PlusIcon>
            </ImageUploadLabel>
          </ImageContainer>
          <GuidanceNotes>
            권장 크기 : 1000 x 1000 (윈도 대상 750 x 1000)
          </GuidanceNotes>
          <GuidanceNotes>
            추가이미지는 최대 9개까지 설정할 수 있습니다.
          </GuidanceNotes>
          <GuidanceNotes>
            jpg,jpeg,gif,png,bmp 형식의 정지 이미지만 등록됩니다.(움직이는
            이미지의 경우 첫 번째 컷에 등록)
          </GuidanceNotes>
        </div>
      </AdditionalImages>
    </CarImageContainer>
  );
};

const CarImageContainer = styled.div``;

const RepresentativeImage = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 40px 35px;
  border: 1px solid #dbdde2;
  background-color: #ffffff;
`;

const SubTitle = styled.div`
  margin-right: 160px;
`;

const PreviewImage = styled.img`
  width: 140px;
  height: 140px;
`;

const ImageUpload = styled.input`
  display: none;
`;

const ImageUploadLabel = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 140px;
  border: 1px dashed;

  &:hover {
    cursor: pointer;
  }
`;

const PlusIcon = styled.div`
  font-size: 60px;
  font-weight: 100;
`;

const AdditionalImages = styled(RepresentativeImage)``;

const ImageContainer = styled.div`
  display: flex;
  gap: 30px;
`;

export default CarImage;
