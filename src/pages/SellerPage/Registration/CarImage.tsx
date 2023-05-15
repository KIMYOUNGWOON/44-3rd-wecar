import React, { useState } from 'react';
import styled from 'styled-components';
import { TitleBox, GuidanceNotes } from './Registration';

function CarImage() {
  const [selectedFile, setSelectedFile] = useState<File | null | undefined>(
    null
  );
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [addPreviewImage, setAddPreviewImage] = useState<string[]>([]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const objectURL = URL.createObjectURL(file);
      setPreviewImage(objectURL);
    } else {
      setPreviewImage(null);
    }

    setSelectedFile(file);
  };

  const AddFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const File = event.target.files?.[0];
    if (File) {
      const objectURL = URL.createObjectURL(File);
      setAddPreviewImage([...addPreviewImage, objectURL]);
    } else {
      setAddPreviewImage([]);
    }

    setSelectedFile(File);
  };

  return (
    <CarImageContainer>
      <TitleBox>
        차량 이미지 <span>•</span>
      </TitleBox>
      <RepresentativeImage>
        <SubTitle>대표 이미지</SubTitle>
        <div>
          {previewImage && <PreviewImage src={previewImage} />}
          <ImageUpload
            id="upload"
            name="uploadImg"
            type="file"
            onChange={handleFileUpload}
          />
          {previewImage === null && (
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
            {addPreviewImage.map((image, i) => {
              return <PreviewImage key={i} src={image} />;
            })}
            <ImageUpload
              id="addUpload"
              name="uploadImg"
              type="file"
              onChange={AddFileUpload}
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
}

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
