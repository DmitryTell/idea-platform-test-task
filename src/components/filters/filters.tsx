import { useDispatch, useSelector } from 'react-redux';

import { ReactComponent as DoneIcon } from '@assets/DoneIcon.svg';
import {
  getStateFilter,
  setCurrency,
  setStops,
} from '@redux/';

import {
  CurrencyButtonRub,
  CurrencyButtonUsd,
  CurrencyButtonEur,
} from './ui';
import * as Styled from './filters.styled';


export const Filters = () => {
  const dispatch = useDispatch();

  const { currency, stops } = useSelector(getStateFilter);

  return (
    <Styled.FiltersContainer>
      <Styled.FiltersCurrencyBlock>
        <Styled.FiltersTitle>валюта</Styled.FiltersTitle>
        <Styled.FiltersCurrencyButtons>
          <CurrencyButtonRub
            currency={ currency }
            text="rub"
            onClick={ () => dispatch(setCurrency({ currency: 'rub' })) }
          />
          <CurrencyButtonUsd
            currency={ currency }
            text="usd"
            onClick={ () => dispatch(setCurrency({ currency: 'usd' })) }
          />
          <CurrencyButtonEur
            currency={ currency }
            text="eur"
            onClick={ () => dispatch(setCurrency({ currency: 'eur' })) }
          />
        </Styled.FiltersCurrencyButtons>
      </Styled.FiltersCurrencyBlock>
      <Styled.FiltersStopsBlock>
        <Styled.FiltersTitle>количество пересадок</Styled.FiltersTitle>
        <Styled.FiltersStopsList>
          <Styled.FiltersStopsItem onClick={ () => dispatch(setStops({ stops: null, currentStop: null })) }>
            <Styled.FiltersStopsItemBlock $isActive={ !stops }>
              { !stops && <DoneIcon /> }
            </Styled.FiltersStopsItemBlock>
            <Styled.FiltersStopsItemText>Все</Styled.FiltersStopsItemText>
          </Styled.FiltersStopsItem>
          { [
            'Без пересадок',
            '1 пересадка',
            '2 пересадки',
            '3 пересадки',
          ].map((stopElement, index) => (
            <Styled.FiltersStopsItem
              // eslint-disable-next-line react/no-array-index-key
              key={ String(index) }
              onClick={ () => dispatch(setStops({ stops, currentStop: index })) }
            >
              <Styled.FiltersStopsItemBlock $isActive={ Boolean(stops?.includes(index)) }>
                { stops?.includes(index) && <DoneIcon /> }
              </Styled.FiltersStopsItemBlock>
              <Styled.FiltersStopsItemText>{ stopElement }</Styled.FiltersStopsItemText>
            </Styled.FiltersStopsItem>
          )) }
        </Styled.FiltersStopsList>
      </Styled.FiltersStopsBlock>
    </Styled.FiltersContainer>
  );
};
