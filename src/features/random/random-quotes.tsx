import { useCallback, useMemo, useState } from "react";
import { Button, Typography, Box } from "@mui/material";
import { faker } from "@faker-js/faker";

const quotes = [
  "삶이 있는 한 희망은 있다. - 키케로",
  "산다는것 그것은 치열한 전투이다. - 로망로랑",
  "하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다. - 사무엘존슨",
  "언제나 현재에 집중할수 있다면 행복할것이다. - 파울로 코엘료",
  "진정으로 웃으려면 고통을 참아야하며, 나아가 고통을 즐길 줄 알아야 한다. - 찰리 채플린",
  "직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다. - 엘버트 허버드",
  "신은 용기있는자를 결코 버리지 않는다. - 켄러",
  "행복의 문이 하나 닫히면 다른 문이 열린다. 그러나 우리는 종종 닫힌 문을 멍하니 바라보다가 우리를 향해 열린 문을 보지 못하게 된다. - 헬렌켈러",
  "피할수 없으면 즐겨라. - 로버트 엘리엇",
  "단순하게 살아라. 현대인은 쓸데없는 절차와 일 때문에 얼마나 복잡한 삶을 살아가는가? - 이드리스 샤흐",
  "먼저 자신을 비웃어라. 다른 사람이 당신을 비웃기 전에. - 엘사 맥스웰",
  "먼저 핀 꽃은 먼저 진다. 그러나 늦게 핀 꽃은 늦게 진다. - 로버트 슐러",
  "인생에서 가장 슬픈 세 가지. 할 수 있었는데, 해야 했는데, 해야만 했는데. - 루이스 E. 분",
  "인생은 곱셈이다. 어떤 기회가 와도 내가 제로면 아무런 의미가 없다. - 나카무라 미츠루",
  "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. - Mark Twain",
  "Challenges are what make life interesting and overcoming them is what makes life meaningful. - Joshua J. Marine",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  "Life is not about finding yourself. Life is about creating yourself. - George Bernard Shaw",
  "The two most important days in your life are the day you are born and the day you find out why. - Mark Twain",
  "There is no greater agony than bearing an untold story inside you. - Maya Angelou",
  "Everything you can imagine is real. - Pablo Picasso",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "If you want to live a happy life, tie it to a goal, not to people or things. - Albert Einstein",
  "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "Strive not to be a success, but rather to be of value. - Albert Einstein",
  "The only impossible journey is the one you never begin. - Tony Robbins",
  "It does not matter how slowly you go as long as you do not stop. - Confucius",
  "Our lives begin to end the day we become silent about things that matter. - Martin Luther King Jr.",
  "Remember that not getting what you want is sometimes a wonderful stroke of luck. - Dalai Lama",
];

export const RandomQuote = () => {
  const [quote, setQuote] = useState<string>(generateQuote());

  const getQuotes = useCallback(() => {
    const quoteLength = quotes.length;
    const randomIndex = Math.floor(Math.random() * quoteLength);
    return quotes[randomIndex];
  }, []);

  function generateQuote() {
    return faker.lorem.sentence();
  }

  const handleNewQuote = () => {
    setQuote(generateQuote());
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
      }}
    >
      <Typography variant="h4">랜덤 명언 생성기</Typography>
      <Typography variant="body1" align="center">
        "{getQuotes()}"
      </Typography>
      <Button variant="contained" onClick={handleNewQuote}>
        새 명언 생성
      </Button>
    </Box>
  );
};
