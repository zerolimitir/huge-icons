import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgHomeInformation = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.58 9.095a.976.976 0 0 0-.578.905c0 .555.444.999.998.999a.998.998 0 1 0-.42-1.904m.12 3.221a.734.734 0 0 0-.398.413c-.054.129-.062.494-.061 2.78.001 2.472.005 2.641.075 2.791a.743.743 0 0 0 1.368 0c.07-.15.074-.318.074-2.8 0-2.482-.004-2.65-.074-2.8-.181-.392-.607-.558-.984-.384'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHomeInformation);
export default ForwardRef;
