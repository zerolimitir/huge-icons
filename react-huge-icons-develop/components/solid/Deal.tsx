import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgDeal = (
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
            d='M4.793 4.81c.664-.367 1.4-.56 2.151-.56h1.681c1.191 0 2.302.482 3.149 1.296.854-.82 1.967-1.296 3.149-1.296h2.133c.75 0 1.487.193 2.15.56l2.05 1.13c.94.518 1.494 1.548 1.494 2.63v6.257c0 1.561-1.163 2.956-2.75 2.956h-4.046c-.33.356-.756.628-1.264.769l-3.53.973a6.23 6.23 0 0 1-4.338-.382l-3.93-1.859C1.867 16.8 1.25 15.72 1.25 14.578V8.57c0-1.082.554-2.112 1.493-2.63l2.05-1.13Zm6.034 1.91c-.6-.623-1.387-.97-2.202-.97h-1.68c-.492 0-.98.126-1.427.373l-2.05 1.13c-.416.23-.718.728-.718 1.317v6.008c0 .624.337 1.14.783 1.35l3.93 1.859a4.73 4.73 0 0 0 3.298.292l3.53-.973c.752-.208 1.247-1.235.798-2.142l-1.803-3.647-.675.745a2.146 2.146 0 0 1-3.222 0c-.78-.86-.842-2.199-.162-3.137l1.6-2.205Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDeal);
export default ForwardRef;
