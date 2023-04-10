import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgPackageBoxFavorite = (
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
            d='M22 18V7.75h-7V13l-3-2-3 2V7.75H2V18a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4ZM20.828 4.828c.407.407.718.893.916 1.422H2.256a4 4 0 0 1 .916-1.422l1.656-1.656A4 4 0 0 1 7.657 2h8.686a4 4 0 0 1 2.829 1.172l1.656 1.656Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPackageBoxFavorite);
export default ForwardRef;
