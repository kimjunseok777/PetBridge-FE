import React, { useState } from "react";
import styled from "styled-components";
import camera from "../../../image/camera-icon.png"
import checkIcon from "../../../image/check-icon.png"
import xBtn from "../../../image/x-button.png"



const ImageUploader = () => {

    const [myImage, setMyImage] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    //--------------------------------------------------------------------
    // 이미지 등록 :
    const addImage = (e) => {
        const nowSelectImageList = Array.from(e.target.files);
        const nowImageURLList = [...myImage];

        if (myImage.length + nowSelectImageList.length > 9) {
            setErrorMessage("이미지는 최대 10개까지 업로드할 수 있습니다.");
            return;
        }

        nowSelectImageList.forEach((file, i) => {
            const nowImageUrl = URL.createObjectURL(file);
            nowImageURLList.push({
                id: Date.now() + i,
                url: nowImageUrl,
                file: file,
            });
        });

        setMyImage(nowImageURLList);
        setErrorMessage("");
        console.log("업로드한 이미지 데이터:", nowImageURLList);
    };

    //--------------------------------------------------------------------
    // 이미지 삭제 :
    const deleteImage = (id) => {
        const filteredImages = myImage.filter((image) => image.id !== id);
        setMyImage(filteredImages);
        console.log("삭제 후 이미지 데이터:", filteredImages);
    };

    //--------------------------------------------------------------------
    // 이미지 제출 (안 쓸거임) :
    const handleSubmit = () => {
        if (myImage.length === 0) {
            setErrorMessage("최소 1개 이상의 이미지를 업로드해야 합니다.");
            return;
        }

        console.log("서버로 전송할 이미지 데이터:", myImage.map((img) => img.file));
        alert("이미지가 성공적으로 제출되었습니다!");
    };

    //--------------------------------------------------------------------
    const setMainImage = (index) => {
        if (index === 0) return; // 이미 첫 번째 이미지면 변경하지 않음

        const newImageList = [...myImage];
        const selectedImage = newImageList.splice(index, 1)[0]; // 클릭한 이미지 제거
        newImageList.unshift(selectedImage); // 맨 앞으로 추가
        setMyImage(newImageList);
    };

    //--------------------------------------------------------------------

    return <>
        <Container>

            {/*------------------- 업로드 버튼 -------------------*/}
            <UploadButton htmlFor="input-file">
                <img src={camera} style={{ width: "40px" }} />
                등록하기
                <HiddenInput
                    type="file"
                    multiple
                    id="input-file"
                    accept=".jpg,.jpeg,.png"
                    onChange={addImage}
                />
            </UploadButton>

            {/*------------------- 등록한 사진 -------------------*/}
            {myImage.map((image, index) => (
                <ImageWrapper key={image.id} onClick={() => setMainImage(index)}>

                    {/*----- 이미지 -----*/}
                    <PreviewImage src={image.url} alt="Uploaded" isMain={index === 0} />

                    {/*----- 체크 -----*/}
                    <CheckMark isMain={index === 0}>
                        <img src={checkIcon} style={{ width: "14px" }} />
                        대표
                    </CheckMark>

                    {/*----- 삭제 -----*/}
                    <DeleteButton onClick={(e) => {
                        e.stopPropagation(); // 부모 클릭 이벤트 방지
                        deleteImage(image.id);
                    }}>
                        <img src={xBtn} style={{ width: "20px" }} />
                    </DeleteButton>

                </ImageWrapper>
            ))}

        </Container>

        {/*------------------- 에러 메세지 -------------------*/}
        {errorMessage && <p style={{ color: "#F47A00", fontFamily: "Pretendard-SemiBold" }}>
            {errorMessage}
        </p>}

        {/* <SubmitButton onClick={handleSubmit} disabled={myImage.length === 0}>
            제출하기
        </SubmitButton> */}
    </>
};

export default ImageUploader;


//---------------------------------------------------------------

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 5px 10px;
`;

// 사진 업로드 버튼 (input 담고 있음) :
const UploadButton = styled.label`
    cursor: pointer;
    width: 120px;
    height: 120px;
    background-color: #A0A0A0;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 8px;
    padding-top: 8px;
    box-sizing: border-box;
    font-family: "Pretendard-Medium";
    color: white;
    font-size: 16px;
`;
const HiddenInput = styled.input`
    display: none;
`;


// 등록한 사진 레이아웃 :
const ImageWrapper = styled.div`
    position: relative;
    cursor: pointer;
    /* display: inline-block; */
`;
// 이미지 :
const PreviewImage = styled.img`
    width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: 10px;
    box-sizing: border-box;
    background-color: #f0f0f0;
    border: 2px solid #e0e0e0;
    /* border: ${(props) => (props.isMain ? "2px solid #FF9500" : "2px solid #e0e0e0")}; */
`;
// 체크 아이콘 (대표 이미지) :
const CheckMark = styled.div`
    position: absolute;
    top: 4px;
    left: 4px;
    width: 66px;
    height: 30px;
    border-radius: 60px;
    /* background-color: #F47A00; */
    background-color: rgba(0, 0, 0, 0.4);
    color: white;
    font-family: "Pretendard-Medium";
    font-size: 14px;
    gap: 5px;
    display: ${(props) => (props.isMain ? "flex" : "none")};
    align-items: center;
    justify-content: center;
`;
// 삭제 버튼 :
const DeleteButton = styled.button`
    cursor: pointer;
    position: absolute;
    top: 6px;
    right: 6px;
    background: rgba(0, 0, 0, 0.4);
    width: 30px;
    height: 30px;
    border: none;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`;


// 제출 버튼 :
// const SubmitButton = styled.button`
//     padding: 10px 15px;
//     background-color: ${(props) => (props.disabled ? "#999" : "#999")};
//     border: none;
//     border-radius: 5px;
//     color: white;
//     font-weight: bold;
//     cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
// `;
