import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSend = (
    { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
    ref: Ref<SVGSVGElement>
) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        aria-labelledby={titleId}
        {...props}>
        {title ? <title id={titleId}>{title}</title> : null}
        <path
            fill='currentColor'
            d='M19.39 3H4.61C2.34 3 1.156 5.635 2.697 7.262l3.09 3.262c.444.47.69 1.085.69 1.723v6.208c0 2.419 3.14 3.468 4.663 1.56L21.446 7.099C22.777 5.43 21.558 3 19.39 3Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSend);
export default ForwardRef;
