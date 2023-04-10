import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFileRemoveBent = (
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
            d='M6 22a4.002 4.002 0 0 0 3.877-3.01c.136-.535.57-.99 1.123-.99h7V5a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v13a4 4 0 0 0 4 4Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M18 22a4.002 4.002 0 0 0 3.877-3.01c.136-.535-.325-.99-.877-.99H11c-.552 0-.987.455-1.123.99A4.002 4.002 0 0 1 6 22h12Z'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M7.348 7.348a.75.75 0 0 1 1.061 0L10 8.94l1.591-1.59a.75.75 0 1 1 1.06 1.06L11.062 10l1.59 1.591a.75.75 0 1 1-1.06 1.06L10 11.062l-1.591 1.59a.75.75 0 0 1-1.06-1.06L8.938 10 7.35 8.409a.75.75 0 0 1 0-1.06Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFileRemoveBent);
export default ForwardRef;
