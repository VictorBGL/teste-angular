export interface MenuModel {
  id: number;
  itens: MenuItemModel[];
}

export interface MenuItemModel {
  id: number;
  descricao: string;
  icone: string;
  rota: string;
  ativo?: boolean;
  rotasRelacionadas?: string[];
}
