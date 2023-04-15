import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgPackageBoxFavorite = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M6.973 2.059a4.27 4.27 0 0 0-1.693.722c-.331.243-2.242 2.155-2.497 2.499a4.33 4.33 0 0 0-.697 1.55L2.049 7h6.95l.011 3 .01 3 1.47-.98c.808-.539 1.488-.98 1.51-.98.022 0 .702.441 1.51.98l1.47.98.01-3 .011-3h6.952l-.054-.23a4.293 4.293 0 0 0-.711-1.53c-.288-.385-2.26-2.326-2.568-2.527-.543-.356-1.024-.551-1.615-.654-.466-.082-9.581-.081-10.032 0'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPackageBoxFavorite);
export default ForwardRef;
