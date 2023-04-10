import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgPackageBoxTwoSide = (
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
            d='m13.625 2.358 5 2.31a4.031 4.031 0 0 1 1.622 1.37l-3.23 1.615-8.265-4.545 1.623-.75a3.863 3.863 0 0 1 3.25 0ZM7.06 3.89l-1.686.779a4.03 4.03 0 0 0-1.622 1.37L12 10.161l3.386-1.693L7.061 3.89ZM3.132 7.405A4.308 4.308 0 0 0 3 8.466v7.068c0 1.643.93 3.131 2.375 3.798l5 2.31c.283.13.576.225.875.284V11.464l-8.118-4.06Zm9.618 14.521c.299-.059.592-.154.875-.284l2.625-1.213V9.714l-3.5 1.75v10.462Zm5-2.19.875-.404C20.069 18.665 21 17.177 21 15.534V8.466c0-.364-.046-.72-.132-1.061L17.75 8.964v10.772Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPackageBoxTwoSide);
export default ForwardRef;
