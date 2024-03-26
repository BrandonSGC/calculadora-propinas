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
};

export const TipPercentageForm = ({ setTip }: TipPercentageFormTypes) => {
  return (
    <div>
      <h3 className="text-2xl font-black">Propina</h3>

      <form>
        {tipOptions.map((tip) => (
          <div className="flex gap-2" key={tip.id}>
            <label htmlFor="tip">{tip.label}</label>
            <input 
              type="radio" 
              name="tip" 
              id={tip.id}
              value={tip.value} 
              // Este signo de más lo convierte en un number, 
              // por eso corrige el error...
              onChange={(e) => setTip(+e.target.value)}
            />
          </div>
        ))}
      </form>
    </div>
  );
};
