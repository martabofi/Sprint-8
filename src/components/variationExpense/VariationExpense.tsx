import { useElements } from "../../context/Context";
import { useTranslation } from 'react-i18next'

const VariationExpense = (): JSX.Element => {
  const { percentageChange } = useElements();
  const { t } = useTranslation();

  return (
    <>
      <div className="font-medium">
        <p className="text-base text-gray flex justify-end">{percentageChange}%</p>
        <p className="text-base text-gray">{t("RespecteAhir")}</p>
      </div>
    </>
  );
};
export default VariationExpense;
