import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgELearning = (
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
            d='M12.75 18.988v2.262H15a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5h2.25v-2.262h1.5Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            d='M21 16V8a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M12 3c.85-.579 2.315-.898 3.202-.996.44-.048.798.309.798.749v4.38c0 .44-.359.797-.798.845C14.315 8.076 12.85 8.421 12 9V3Zm0 0c-.85-.579-2.315-.898-3.202-.996-.44-.048-.798.309-.798.749v4.38c0 .44.359.797.798.845C9.685 8.076 11.15 8.421 12 9V3Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgELearning);
export default ForwardRef;
