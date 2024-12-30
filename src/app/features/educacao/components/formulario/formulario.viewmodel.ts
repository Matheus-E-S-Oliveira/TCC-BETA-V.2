import { EducacaoResponse } from '../../../../core/api/endpoints/educacao/educacao.response';
import { FormControl } from "@angular/forms"

export class formularioEducacaoModel{
    public constructor(educacaoResponse?: EducacaoResponse) {
        this.id = new FormControl (educacaoResponse?.id ?? null);
        this.questao1 = new FormControl (educacaoResponse?.questao1 ?? null);
        this.questao2 = new FormControl (educacaoResponse?.questao2 ?? null);
        this.questao3 = new FormControl (educacaoResponse?.questao3 ?? null);
        this.questao4 = new FormControl (educacaoResponse?.questao4 ?? null);
        this.questao5 = new FormControl (educacaoResponse?.questao5 ?? null);
    }

    public id: FormControl<string |null>;
    public questao1: FormControl<number | null>;
    public questao2: FormControl<number | null>;
    public questao3: FormControl<number | null>;
    public questao4: FormControl<number | null>;
    public questao5: FormControl<number | null>;
}