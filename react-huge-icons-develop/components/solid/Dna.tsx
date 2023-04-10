import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgDna = (
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
            d='M6.091 1.293a.75.75 0 0 1 .957.457A5.253 5.253 0 0 0 12 5.25c.057 0 .114 0 .17.002a6.88 6.88 0 0 1 .171-.002c2.285 0 4.23-1.46 4.952-3.5a.75.75 0 0 1 1.414.5 6.772 6.772 0 0 1-3.447 3.838 6.777 6.777 0 0 1 2.906 3.162H6.176A6.778 6.778 0 0 1 9.08 6.088 6.772 6.772 0 0 1 5.634 2.25a.75.75 0 0 1 .457-.957Zm-.384 9.457h12.927a6.792 6.792 0 0 1 0 2.5H5.707a6.787 6.787 0 0 1 0-2.5Zm.468 4a6.778 6.778 0 0 0 2.906 3.162 6.772 6.772 0 0 0-3.447 3.838.75.75 0 1 0 1.414.5A5.252 5.252 0 0 1 12 18.75c.057 0 .114 0 .17-.002.057.002.114.002.171.002 2.285 0 4.23 1.46 4.952 3.5a.75.75 0 1 0 1.414-.5 6.772 6.772 0 0 0-3.447-3.838 6.777 6.777 0 0 0 2.906-3.162H6.176Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDna);
export default ForwardRef;
