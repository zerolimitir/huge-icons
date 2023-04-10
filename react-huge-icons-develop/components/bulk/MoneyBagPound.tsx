import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMoneyBagPound = (
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
            d='M10.48 11.885a2.135 2.135 0 0 1 4.27 0v.497a.75.75 0 0 1-1.5 0v-.497a.635.635 0 1 0-1.27 0v.57c0 .437-.04.87-.122 1.295H13a.75.75 0 0 1 0 1.5h-1.61a6.908 6.908 0 0 1-1.075 1.704.482.482 0 0 0 .365.796H14a.75.75 0 0 1 0 1.5h-3.32c-1.693 0-2.607-1.987-1.504-3.273.197-.228.373-.472.527-.727H9a.75.75 0 0 1 0-1.5h1.323c.104-.42.158-.856.158-1.295v-.57Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMoneyBagPound);
export default ForwardRef;
