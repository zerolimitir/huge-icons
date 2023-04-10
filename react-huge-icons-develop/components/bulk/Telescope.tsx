import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgTelescope = (
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
            d='M6.692 12.097c-.565-1.012-.23-2.305.75-2.889l10.873-6.287 3.073 5.495-10.872 6.286c-.98.584-2.233.238-2.8-.774l-1.024-1.831Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='m11.373 14.207-3.485 7.476a.75.75 0 0 0 1.36.634l4.391-9.42-2.266 1.31Zm2.346-1.357 4.414 9.467a.75.75 0 1 0 1.36-.634l-4.47-9.586-1.304.753Zm-6.881-.492a1.21 1.21 0 0 0-.017.01l-3.774 2.249-.393-.7a.75.75 0 0 0-1.309.732l.769 1.373.654-.366-.654.366.768 1.373a.75.75 0 1 0 1.31-.732l-.413-.736 3.792-2.26-.733-1.31Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            d='M16.57 4.38c-.424-.76-.172-1.73.563-2.167a1.511 1.511 0 0 1 2.1.58l2.56 4.579c.425.758.173 1.728-.562 2.166a1.51 1.51 0 0 1-2.099-.58l-2.561-4.579Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTelescope);
export default ForwardRef;
