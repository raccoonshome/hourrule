import React, { useState } from "react";
import Input from './input';
import {FontStyles} from './style';
import {Button, WhiteBtn, ModalBtn} from './button';
import {DefaultSection, StyledTemplate, DivButtons} from './section.style'

const modalList = [
  {
  id: 1,
  title: `화이팅!!♥♥♥`,
  content: `당신의 꿈을 응원합니다!`,
  img: `licat.png`,
  alt: `라이캣`,
  close: `종료하고 진짜 훈련하러 가기 GO!GO!`,
  },
];

const T = (texts, children) => {
  return <StyledTemplate>{texts[0]}{children}{texts[1]}</StyledTemplate>
};

const HourSection = () =>{
  const [moreBtn, setMoreBtn] = useState(false);
  const [goal, setGoal] = useState('');
  const [time, setTime] = useState('');
  const handleClick = () => {
    setMoreBtn(true);
    setTime(Math.ceil(10000/time));
  };

  const handleClickReset = () => {
    setMoreBtn(false);
    setGoal("");
    setTime(0);
  }

  return <DefaultSection>
    {moreBtn ? 
      <>
        {T`당신은 ${<FontStyles.Mega>{goal}</FontStyles.Mega>} 전문가가 되기 위해서`}
        {T`대략 ${<FontStyles.Mega>{time}</FontStyles.Mega>} 일 이상 훈련하셔야 됩니다. :)`}
        <DivButtons>
          <ModalBtn value={`훈련하러 가기 GO!GO!`} contents={modalList[0]} />
          <WhiteBtn onClick={handleClickReset}>다시 계산하기</WhiteBtn>
        </DivButtons>
      </>
      :
      <>
        {T`나는 ${<><FontStyles.Br/><Input placeholder={`예)프로그래밍`} type={`text`} getText={setGoal}/><FontStyles.Br/></>} 전문가가 될 것이다.`}
        {T`그래서 앞으로 매일 하루에 ${<><FontStyles.Br/><Input placeholder={`예) 5`} type={`number`} getText={setTime}/><FontStyles.Br/></>} 시간씩 훈련할 것이다.`}
        <DivButtons>
          <Button onClick={handleClick}>나는 며칠 동안 훈련을 해야<FontStyles.Br/> 1만 시간이 될까?</Button>
          <img src="pointer.svg"/>
        </DivButtons>
      </>
    }
  </DefaultSection>
}

export default HourSection;