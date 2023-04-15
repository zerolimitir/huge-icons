import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgFloppyDisk = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M8.7 6.316a.745.745 0 0 0 .029 1.382c.13.054.543.062 3.28.061 2.958-.001 3.14-.005 3.291-.075a.743.743 0 0 0 0-1.368c-.151-.07-.332-.074-3.3-.074s-3.149.004-3.3.074m-.262 7.759a1.984 1.984 0 0 0-.872.542 1.955 1.955 0 0 0-.502.86c-.056.192-.064.587-.064 3.37V22h10v-3.153c0-3.467.009-3.329-.248-3.815-.146-.275-.54-.664-.813-.802-.47-.238-.333-.23-3.956-.228-3.071.002-3.34.008-3.545.073'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFloppyDisk);
export default ForwardRef;
