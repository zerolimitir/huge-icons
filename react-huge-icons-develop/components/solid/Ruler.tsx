import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgRuler = (
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
            fillRule='evenodd'
            d='M2.646 15.118a2.205 2.205 0 0 0 0 3.118l3.118 3.118a2.205 2.205 0 0 0 3.118 0l1.029-1.029-1.56-1.559a.75.75 0 0 1 1.061-1.06l1.56 1.559 2.057-2.058-1.56-1.559a.75.75 0 1 1 1.061-1.06l1.56 1.559 2.057-2.058-1.56-1.559a.75.75 0 1 1 1.061-1.06l1.56 1.559 2.057-2.058-1.56-1.559a.75.75 0 1 1 1.062-1.06l1.559 1.559 1.028-1.03a2.205 2.205 0 0 0 0-3.117l-3.118-3.118a2.205 2.205 0 0 0-3.118 0L2.646 15.118Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgRuler);
export default ForwardRef;
