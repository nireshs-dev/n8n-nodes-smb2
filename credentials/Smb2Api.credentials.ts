import {
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class Smb2Api implements ICredentialType {
	name = 'smb2Api';
	displayName = 'Samba (SMB2) API';
	properties: INodeProperties[] = [
		{
			displayName: 'Host',
			name: 'host',
			type: 'string',
			required: true,
			default: '',
		},
		{
			displayName: 'User Name',
			name: 'username',
			type: 'string',
			required: true,
			default: '',
		},
		{
			displayName: 'Password',
			name: 'password',
			type: 'string',
			typeOptions: {
				password: true,
			},
			noDataExpression: true,
			required: true,
			default: '',
		},
		{
			displayName: 'Domain',
			name: 'domain',
			type: 'string',
			default: '',
		},
		{
			displayName: 'Share Name',
			name: 'share',
			type: 'string',
			required: true,
			default: '',
		},
	];
}
