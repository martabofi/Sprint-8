import { useElements } from "../../context/Context";
import { useTranslation } from 'react-i18next'

const TodayExpense = (): JSX.Element => {
  const {todayExpense} = useElements();
  const { t } = useTranslation();

  return <>
          <div>
            <p className="text-xs text-gray">{t("DespesesAvui")}</p>
            <p className="text-3xl text-gray font-bold">{todayExpense} €</p>
          </div>
  </>;
};
export default TodayExpense;
