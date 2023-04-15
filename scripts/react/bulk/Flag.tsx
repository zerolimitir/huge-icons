import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgFlag = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M3.76 9v6h5.816c5.597 0 5.826-.003 6.06-.076.613-.19 1.113-.717 1.291-1.358.069-.249.073-.517.072-4.505 0-4.668.005-4.554-.246-5.032-.261-.495-.785-.891-1.308-.989-.138-.026-2.277-.04-5.95-.04H3.76v6'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFlag);
export default ForwardRef;
