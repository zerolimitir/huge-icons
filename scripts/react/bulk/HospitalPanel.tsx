import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgHospitalPanel = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M7.7 7.316a.734.734 0 0 0-.398.413c-.055.131-.062.64-.061 4.28.001 3.931.004 4.139.075 4.291a.743.743 0 0 0 1.368 0c.068-.147.074-.293.075-1.85l.001-1.69h6.48l.001 1.69c.001 1.557.007 1.703.075 1.85a.745.745 0 0 0 1.382-.029c.055-.131.062-.64.062-4.271s-.007-4.14-.062-4.271a.748.748 0 0 0-1.396 0c-.053.126-.062.403-.062 1.83v1.681H8.76l-.001-1.69c-.001-1.557-.007-1.703-.075-1.85-.181-.392-.607-.558-.984-.384'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHospitalPanel);
export default ForwardRef;
