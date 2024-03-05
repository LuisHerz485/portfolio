import { Component } from '@angular/core';
import { conocimientos } from '@/app/shared/data';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import * as sharedConstants from '@/app/shared/constants';
import { IDataSkill } from '@/app/shared/interfaces';
import { TranslatePipe } from '@/app/shared/pipes';
import * as enumKeys from '@/app/shared/enums';

@Component({
    selector: 'app-conocimientos',
    standalone: true,
    imports: [FontAwesomeModule, TranslatePipe],
    templateUrl: './conocimientos.component.html',
    styleUrl: './conocimientos.component.scss',
})
export class ConocimientosComponent {
    public conocimientos: IDataSkill[] = conocimientos;
    public sharedConstans: typeof sharedConstants = sharedConstants;
    public enumKeys: typeof enumKeys = enumKeys;
}
