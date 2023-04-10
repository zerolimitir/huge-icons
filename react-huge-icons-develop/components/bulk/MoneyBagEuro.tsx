import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMoneyBagEuro = (
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
            d='M9.761 14.25a2.784 2.784 0 0 0 0 .5H12a.75.75 0 0 1 0 1.5h-1.621c.504.61 1.267 1 2.121 1a2.74 2.74 0 0 0 1.964-.825.75.75 0 1 1 1.072 1.05 4.25 4.25 0 0 1-6.91-1.224H8a.75.75 0 0 1 0-1.501h.257a4.315 4.315 0 0 1 0-.5H8a.75.75 0 0 1 0-1.5h.626a4.25 4.25 0 0 1 6.91-1.224.75.75 0 1 1-1.072 1.05 2.74 2.74 0 0 0-1.964-.826c-.854 0-1.617.39-2.121 1H12a.75.75 0 0 1 0 1.5H9.761Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMoneyBagEuro);
export default ForwardRef;
