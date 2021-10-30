import {Tendency} from '~/consts';

export const evilRed=`#990000`;
export const goodGreen=`#008B0E`;

type GetColorByTendencyProps = {
  tendency: Tendency
}

export const getColorByTendency = ({tendency}: GetColorByTendencyProps) => {
  switch (tendency) {
    case Tendency.evil:
      return evilRed;
    case Tendency.good:
      return goodGreen;
    default:
      return;
  }
};
