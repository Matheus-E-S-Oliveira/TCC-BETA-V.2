import { ComboBase, ListItem } from "../../../shared/constants/base.constants";

export class RatingCombo extends ComboBase {
    public readonly RATING1 = new ListItem(['star', 'star_border', 'star_border', 'star_border', 'star_border'], 'option 1');
    public readonly RATING2 = new ListItem(['star', 'star', 'star_border', 'star_border', 'star_border'], 'option 2');
    public readonly RATING3 = new ListItem(['star', 'star', 'star', 'star_border', 'star_border'], 'option 3');
    public readonly RATING4 = new ListItem(['star', 'star', 'star', 'star', 'star_border'], 'option 4');
    public readonly RATING5 = new ListItem(['star', 'star', 'star', 'star', 'star'], 'option 5')

    public readonly GetOptions = this.GetListItens();
    
}

export const Rating = new RatingCombo();