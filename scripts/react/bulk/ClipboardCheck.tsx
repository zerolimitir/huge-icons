import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgClipboardCheck = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M9.62 2.041a2.006 2.006 0 0 0-1.372 2.927c.146.275.541.664.813.802.457.232.434.23 2.939.23 2.532 0 2.493.003 2.968-.248.275-.146.664-.54.803-.815.183-.361.242-.638.217-1.016-.058-.854-.544-1.512-1.338-1.812-.226-.086-.274-.088-2.55-.095-1.276-.004-2.392.008-2.48.027m5.074 9.276c-.133.061-.473.425-1.676 1.799-1.388 1.586-1.518 1.724-1.634 1.724-.103 0-.284-.127-1.005-.708-.936-.755-1.149-.893-1.376-.891a.893.893 0 0 0-.551.244.895.895 0 0 0-.212.525c0 .309.122.444 1.16 1.278.539.433 1.065.835 1.169.892a1.75 1.75 0 0 0 1.045.18c.413-.064.723-.228 1.034-.548.549-.565 2.964-3.359 3.035-3.512.18-.384-.003-.827-.412-.998a.672.672 0 0 0-.577.015'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgClipboardCheck);
export default ForwardRef;
