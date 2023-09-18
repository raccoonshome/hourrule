import React, { useState } from "react";
import Input from '../atoms/input';
import {FontStyles} from '../style';
import {Button, ModalBtn} from '../atoms/button';
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

const Template = (texts, children) => {
  return <StyledTemplate>{texts[0]}{children}{texts[1]}</StyledTemplate>
};

const HourSection = () =>{
  const [next, setNext] = useState(false);
  const [goal, setGoal] = useState('');
  const [time, setTime] = useState('');
  const handleClick = () => {
    setNext(true);
    setTime(Math.ceil(10000/time));
  };

  const handleClickReset = () => {
    setNext(false);
    setGoal("");
    setTime(0);
  }

  return <DefaultSection>
    {next ? 
      <form>
        {Template`당신은 ${<FontStyles.Mega>{goal}</FontStyles.Mega>} 전문가가 되기 위해서`}
        {Template`대략 ${<FontStyles.Mega>{time}</FontStyles.Mega>} 일 이상 훈련하셔야 됩니다. :)`}
        <DivButtons>
          <ModalBtn variant={'primary'} value={`훈련하러 가기 GO!GO!`} contents={modalList[0]} />
          <Button  onSubmit={handleClickReset}>다시 계산하기</Button>
        </DivButtons>
      </form>
      :
      <form>
        {Template`나는 ${<><FontStyles.Br/><Input placeholder={`예)프로그래밍`} type={`text`} getText={setGoal}/><FontStyles.Br/></>} 전문가가 될 것이다.`}
        {Template`그래서 앞으로 매일 하루에 ${<><FontStyles.Br/><Input placeholder={`예) 5`} type={`number`} getText={setTime}/><FontStyles.Br/></>} 시간씩 훈련할 것이다.`}
        <DivButtons>
          <Button variant={'primary'} onSubmit={handleClick}>나는 며칠 동안 훈련을 해야<FontStyles.Br/> 1만 시간이 될까?</Button>
          <img src="pointer.svg" alt=""/>
        </DivButtons>
      </form>
    }
  </DefaultSection>
}

export default HourSection;