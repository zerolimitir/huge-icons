import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgWifiSignal = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M11.02 3.041c-2.662.236-5.279 1.336-7.58 3.186-.565.454-.774.856-.777 1.493-.001.428.061.659.27 1.005.28.462 7.479 10.142 7.705 10.36a1.96 1.96 0 0 0 2.724 0c.226-.218 7.419-9.892 7.707-10.365.199-.326.271-.601.268-1.02-.005-.617-.22-1.025-.777-1.473C18.41 4.499 16 3.43 13.5 3.099c-.574-.076-1.923-.108-2.48-.058'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWifiSignal);
export default ForwardRef;
