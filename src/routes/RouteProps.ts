export type RouteProps = {
  path: string;
  element: React.ReactElement;
  children?: RouteProps[]; // ? indica que a propriedade tipada é opcional
};
