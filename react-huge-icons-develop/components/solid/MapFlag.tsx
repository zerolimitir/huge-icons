import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMapFlag = (
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
            d='M12.848 9.642c-.62-.309-1.185-.739-1.75-1.169-1.17-.89-2.34-1.78-4-1.595-1.518.17-3.305 1.226-4.532 2.077-.961.667-1.468 1.787-1.468 2.958v8.747c0 .853 1.028 1.348 1.736.872 1.21-.813 2.853-1.735 4.264-1.893 1.66-.186 2.83.704 4 1.595 1.17.89 2.341 1.78 4 1.595 1.519-.17 3.306-1.226 4.532-2.077.961-.667 1.468-1.787 1.468-2.958V9.82c0-.721-.744-1.215-1.421-.965a28.46 28.46 0 0 1-2.507.804v3.196c0 1.242-.968 2.25-2.161 2.25-1.194 0-2.16-1.008-2.16-2.25V9.642Z'
        />
        <path
            fill='currentColor'
            d='M14.25 1.897a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 .67 1.085l-.832 1.665.833 1.664A.75.75 0 0 1 21 6.647h-5.25v6.485a.75.75 0 1 1-1.5 0V1.897Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMapFlag);
export default ForwardRef;
