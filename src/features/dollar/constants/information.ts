import { 
  Landmark,
  Banknote,
  ChartNoAxesCombined,
  Globe,
  BuildingComplex,
  Coins,
  CreditCard,
} from "lucide-react";

export const information = {
  oficial: {
    icon: Landmark,
    title: "Dólar oficial",
    description: `Es la cotización del dólar en el mercado cambiario formal, a través de bancos y entidades autorizadas. 
      Su precio depende de la cotización ofrecida por cada entidad y de las condiciones del mercado oficial. 
      Se suele distinguir entre precio de compra y de venta.`,
    note: `Se calcula a partir de la cotización oficial minorista publicada por la entidad consultada.`
  },
  blue: {
    icon: Banknote,
    title: "Dólar blue",
    description: `Es la cotización del mercado informal de compra y venta de dólares en efectivo. 
      Su precio surge de la oferta y la demanda de ese mercado, por lo que puede diferir del oficial y variar según el operador y la plaza.`,
    note: `Se toma como referencia la cotización informal relevada por la fuente de datos.`
  },
  bolsa: {
    icon: ChartNoAxesCombined,
    title: "Dólar bolsa (MEP)",
    description: `Es un tipo de cambio implícito que se obtiene mediante la compra y venta de bonos 
    u otros títulos negociables en pesos y dólares dentro del mercado local.`,
    note: `Se estima dividiendo el precio pagado en pesos por el importe obtenido en dólares, para operaciones equivalentes del mismo título.`
  },
  contadoconliquidacion: {
    icon: Globe,
    title: "Dólar contado con liquidación (CCL)",
    description: `
      Se obtiene mediante operaciones con títulos negociables que permiten convertir pesos en dólares acreditados en una cuenta del exterior. 
      Es similar al MEP, pero se diferencia principalmente por el destino de los dólares.`,
    note: `Se calcula a partir de los precios en pesos y en dólares de operaciones equivalentes con el mismo título.`
  },
  mayorista: {
    icon: BuildingComplex,
    title: "Dólar mayorista",
    description: `Es el tipo de cambio del mercado mayorista formal, donde operan entidades financieras y otros participantes autorizados. 
      Es una referencia importante para operaciones de gran volumen y comercio exterior.`,
    note: `Su valor surge de las operaciones de ese mercado y de las condiciones cambiarias vigentes.`
  },
  cripto: {
    icon: Coins,
    title: "Dólar cripto",
    description: `Es una cotización de referencia obtenida mediante la compra y venta de criptomonedas estables vinculadas al dólar, 
      como USDT o USDC, utilizando pesos argentinos.`,
    note: `Se determina según el precio de la stablecoin en pesos en el exchange o plataforma consultada. 
      Puede variar entre plataformas y no equivale necesariamente a USD 1 en todos los mercados.`
  },
  tarjeta: {
    icon: CreditCard,
    title: "Dólar tarjeta",
    description: `Es el tipo de cambio de referencia para determinados consumos en moneda extranjera pagados con tarjetas 
    u otros medios alcanzados por el régimen correspondiente. 
    Su importe final puede incluir percepciones impositivas sobre la cotización de referencia.`,
    note: `Se calcula a partir de la cotización aplicable más los impuestos o percepciones vigentes para la operación concreta.`
  }
};