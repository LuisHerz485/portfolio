import { Component } from '@angular/core';
import { conocimientos } from '../../shared/data';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import * as sharedConstants from '../../shared/constants';
import { IDataSkill } from '../../shared/interfaces';

@Component({
    selector: 'app-conocimientos',
    standalone: true,
    imports: [FontAwesomeModule],
    templateUrl: './conocimientos.component.html',
    styleUrl: './conocimientos.component.scss',
})
export class ConocimientosComponent {
    public conocimientos: IDataSkill[] = conocimientos;
    public sharedConstans: typeof sharedConstants = sharedConstants;
}
