import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgDashboard = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.7 6.316a.734.734 0 0 0-.398.413c-.055.131-.062.738-.062 5.271 0 4.533.007 5.14.062 5.271a.748.748 0 0 0 1.396 0c.055-.131.062-.737.061-5.28-.001-4.903-.004-5.138-.075-5.291-.181-.392-.607-.558-.984-.384m-5 2a.734.734 0 0 0-.398.413c-.054.13-.062.543-.061 3.28.001 2.958.005 3.14.075 3.291a.743.743 0 0 0 1.368 0c.07-.151.074-.332.074-3.3s-.004-3.149-.074-3.3c-.181-.392-.607-.558-.984-.384m10 0a.734.734 0 0 0-.398.413c-.054.13-.062.543-.061 3.28.001 2.958.005 3.14.075 3.291a.743.743 0 0 0 1.368 0c.07-.151.074-.332.074-3.3s-.004-3.149-.074-3.3c-.181-.392-.607-.558-.984-.384'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDashboard);
export default ForwardRef;
