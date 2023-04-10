import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMoneyBagYen = (
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
            d='M14.086 7H9.914L8.513 5.393c-1.373-1.575.229-3.93 2.234-3.283l.928.3c.211.067.439.067.65 0l.928-.3c2.005-.647 3.607 1.708 2.234 3.283L14.086 7Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M5.684 10.21A6 6 0 0 1 11.411 6h1.178a6 6 0 0 1 5.727 4.21l1.25 4c1.207 3.864-1.68 7.79-5.727 7.79H10.16c-4.048 0-6.934-3.926-5.727-7.79l1.25-4Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M9.584 10.376a.75.75 0 0 1 1.04.208L12 12.648l1.376-2.064a.75.75 0 0 1 1.248.832l-1.556 2.334H14a.75.75 0 0 1 0 1.5h-1.25v.5H14a.75.75 0 0 1 0 1.5h-1.25V19a.75.75 0 0 1-1.5 0v-1.75H10a.75.75 0 1 1 0-1.5h1.25v-.5H10a.75.75 0 1 1 0-1.5h.932l-1.556-2.334a.75.75 0 0 1 .208-1.04Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMoneyBagYen);
export default ForwardRef;
