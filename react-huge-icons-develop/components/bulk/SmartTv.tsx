import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSmartTv = (
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
            d='M12 15.25a.75.75 0 0 1 .75.75v3.282c1.36.101 2.778.443 4.485 1.006a.75.75 0 0 1-.47 1.424c-2-.66-3.472-.964-4.878-.962-1.402.002-2.795.31-4.638.957a.75.75 0 0 1-.498-1.415c1.675-.588 3.082-.94 4.499-1.023V16a.75.75 0 0 1 .75-.75Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            d='M18 3a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h12Z'
            opacity={0.4}
        />
        <path fill='currentColor' d='M12.75 13a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z' />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M12 7.75a5.23 5.23 0 0 0-3.712 1.538.75.75 0 0 1-1.061-1.061A6.731 6.731 0 0 1 12 6.25a6.73 6.73 0 0 1 4.773 1.977.75.75 0 0 1-1.06 1.06A5.231 5.231 0 0 0 12 7.75Zm0 3a2.24 2.24 0 0 0-1.591.659.75.75 0 1 1-1.06-1.06A3.74 3.74 0 0 1 12 9.25a3.74 3.74 0 0 1 2.652 1.098.75.75 0 0 1-1.061 1.061A2.24 2.24 0 0 0 12 10.75Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSmartTv);
export default ForwardRef;
