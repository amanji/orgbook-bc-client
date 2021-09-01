import { Component, Input } from '@angular/core';
import { GeneralDataService } from 'app/general-data.service';
import { Model } from '../data-types';

@Component({
  selector: 'timeline-cred',
  templateUrl: './timeline-cred.component.html',
})
export class TimelineCredComponent {
  protected _cred: Model.Credential;

  constructor(private generalDataService: GeneralDataService) { }

  get credential() {
    return this._cred;
  }

  @Input() set credential(cred: Model.Credential) {
    this._cred = cred;
  }

  get related_topic_name() {
    //let topic = this._cred && this._cred.related_topics && this._cred.related_topics[0];
    //if(topic && topic.names && topic.names.length) return topic.names[0].text;
    return this._cred && this._cred.relatedPreferredName;
  }

  get topic_name() {
    return this._cred && this._cred.local_name && this._cred.local_name.text;
    //return this._cred && this._cred.topic && this._cred.topic.local_name.text;
    //return this._cred && this._cred.names.length && this._cred.names[0].text;
  }

  translateEntry(value: string, prefix?: string): string {
    return this.generalDataService.translateEntry(value, prefix);
  }

}
