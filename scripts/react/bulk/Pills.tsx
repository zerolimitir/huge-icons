import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgPills = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M16.925 7.055 13.95 10.03l.349.415c.454.54.694.906.981 1.495.257.53.439 1.051.558 1.6.076.352.162 1.055.162 1.324V15H2v.136c0 .264.085.969.161 1.334.275 1.326 1.056 2.712 2.046 3.628 2.522 2.335 6.282 2.534 9.017.477a7.072 7.072 0 0 0 2.317-3.091c.15-.39.319-1.02.362-1.349l.026-.205.205-.024c.76-.09 1.901-.534 2.686-1.044 3.55-2.306 4.236-7.219 1.461-10.452-.156-.181-.305-.33-.332-.33-.027 0-1.388 1.339-3.024 2.975'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPills);
export default ForwardRef;
