import React, { FunctionComponent } from 'react';

import { TranslatedString } from '../language';
import { Alert, AlertType } from '../ui/alert';

const SignedUpSuccessAlert: FunctionComponent = () => (
    <Alert type={ AlertType.Success }>
        <strong>
            <TranslatedString id="customer.create_account_success"></TranslatedString>
        </strong>
    </Alert>
);

export default SignedUpSuccessAlert;