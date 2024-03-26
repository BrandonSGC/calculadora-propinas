const tipOptions = [
  {
    id: "tip-10",
    value: 0.1,
    label: "10%",
  },
  {
    id: "tip-20",
    value: 0.2,
    label: "20%",
  },
  {
    id: "tip-50",
    value: 0.5,
    label: "50%",
  },
];

type TipPercentageFormTypes = {
  setTip: React.Dispatch<React.SetStateAction<number>>;
  tip: number;
};

export const TipPercentageForm = ({ setTip, tip }: TipPercentageFormTypes) => {
  return (
    <div>
      <h3 className="text-2xl font-black">Propina</h3>

      <form>
        {tipOptions.map((tipOption) => (
          <div className="flex gap-2" key={tipOption.id}>
            <label htmlFor="tip">{tipOption.label}</label>
            <input
              type="radio"
              name="tip"
              id={tipOption.id}
              value={tipOption.value}
              // Este signo de más lo convierte en un number,
              // por eso corrige el error...
              onChange={(e) => setTip(+e.target.value)}
              checked={tipOption.value === tip}
            />
          </div>
        ))}
      </form>
    </div>
  );
};