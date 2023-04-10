import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCloudHalfMoonRainLow = (
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
            d='M21.021 9.893a6.5 6.5 0 0 0-4.781-1.349 8.53 8.53 0 0 0-3.925-3.373 5.014 5.014 0 0 1 3.054-2.979c.34-.117.65.202.634.562a4 4 0 0 0 5.502 3.873c.227-.092.495.048.495.293a4.978 4.978 0 0 1-.979 2.973ZM9 20a7 7 0 1 1 6.439-9.752A4.994 4.994 0 0 1 17 10c1.102 0 2.12.356 2.947.96A5 5 0 0 1 17 20h-2.044a3.828 3.828 0 0 0-.344-1.018c-.2-.406-.45-.77-.674-1.061a9.3 9.3 0 0 0-.822-.929l-.094-.09a1.5 1.5 0 0 0-2.044 0l-.094.09a9.3 9.3 0 0 0-.822.928 6.374 6.374 0 0 0-.674 1.062A3.825 3.825 0 0 0 9.045 20H9Zm3 2c.828 0 1.5-.396 1.5-1.5 0-1.105-1.5-2.5-1.5-2.5s-1.5 1.395-1.5 2.5c0 1.104.672 1.5 1.5 1.5Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCloudHalfMoonRainLow);
export default ForwardRef;
