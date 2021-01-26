import * as CSS from 'csstype';
import { Config, RequiredTheme, ResponsiveValue, system, Theme, TLengthStyledSystem } from 'styled-system';

export interface GridUtilProps<ThemeType extends Theme = RequiredTheme> {
  /**
   * The `grid-column` CSS shorthand property specifies a grid item's size and location within a
   * grid column by contributing a line, a span, or nothing (automatic) to its grid placement,
   * thereby specifying the inline-start and inline-end edge of its grid area.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column)
   */
  column?: ResponsiveValue<CSS.Property.GridColumn, ThemeType>;
  /**
   * The `grid-row` CSS shorthand property specifies a grid item’s size and location within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start and inline-end edge of its grid area.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row)
   */
  row?: ResponsiveValue<CSS.Property.GridRow, ThemeType>;
  /**
   * The `grid-area` CSS shorthand property specifies a grid item’s size and location within a grid by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the edges of its grid area.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-area)
   */
  area?: ResponsiveValue<CSS.Property.GridArea, ThemeType>;
  /**
   * The `grid-auto-flow` CSS property controls how the auto-placement algorithm works, specifying exactly how auto-placed items get flowed into the grid.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow)
   */
  autoFlow?: ResponsiveValue<CSS.Property.GridAutoFlow, ThemeType>;
  /**
   * The `grid-auto-rows` CSS property specifies the size of an implicitly-created grid row track or pattern of tracks.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows)
   */
  autoRows?: ResponsiveValue<CSS.Property.GridAutoRows<TLengthStyledSystem>, ThemeType>;
  /**
   * The `grid-auto-columns` CSS property specifies the size of an implicitly-created grid column track or pattern of tracks.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns)
   */
  autoColumns?: ResponsiveValue<CSS.Property.GridAutoColumns<TLengthStyledSystem>, ThemeType>;
  /**
   * The `grid-template-rows` CSS property defines the line names and track sizing functions of the grid rows.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows)
   */
  templateRows?: ResponsiveValue<CSS.Property.GridTemplateRows<TLengthStyledSystem>, ThemeType>;
  /**
   * The `grid-template-columns` CSS property defines the line names and track sizing functions of the grid columns.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns)
   */
  templateColumns?: ResponsiveValue<CSS.Property.GridTemplateColumns<TLengthStyledSystem>, ThemeType>;
  /**
   * The grid-template-areas CSS property specifies named grid areas, establishing the cells in the grid and assigning them names.
   *
   * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas)
   */
  templateAreas?: ResponsiveValue<CSS.Property.GridTemplateAreas, ThemeType>;
}

const config: Config = {
  column: {
    property: 'gridColumn',
  },
  row: {
    property: 'gridRow',
  },
  area: {
    property: 'gridArea',
  },
  autoFlow: {
    property: 'gridAutoFlow',
  },
  autoRows: {
    property: 'gridAutoRows',
  },
  autoColumns: {
    property: 'gridAutoColumns',
  },
  templateRows: {
    property: 'gridTemplateRows',
  },
  templateColumns: {
    property: 'gridTemplateColumns',
  },
  templateAreas: {
    property: 'gridTemplateAreas',
  },
};

export const gridUtil = system(config);

export const gridUtilProps = [
  'column',
  'row',
  'area',
  'autoFlow',
  'autoRows',
  'autoColumns',
  'templateRows',
  'templateColumns',
  'templateAreas',
];
