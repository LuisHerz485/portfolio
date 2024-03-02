import { Component } from '@angular/core';
import { conocimientos } from '../../shared/data';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import * as sharedConstants from '../../shared/constants';
import { IDataSkill } from '../../shared/interfaces';
import { TranslatePipe } from '../../shared/pipes';
import * as enumKeys from '../../shared/enums';

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
