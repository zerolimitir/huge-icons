import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgFileMinusBent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M6.7 9.316a.745.745 0 0 0 .029 1.382c.13.054.543.062 3.28.061 2.958-.001 3.14-.005 3.291-.075a.743.743 0 0 0 0-1.368c-.151-.07-.332-.074-3.3-.074s-3.149.004-3.3.074m3.955 8.749c-.213.075-.469.296-.598.516a3.64 3.64 0 0 0-.223.545c-.3.918-.843 1.672-1.549 2.151-.504.342-1.264.635-1.805.695-.077.009 2.623.014 6 .011l6.14-.006.3-.086c.949-.271 1.658-.72 2.18-1.381.44-.555.78-1.31.78-1.729 0-.342-.245-.632-.624-.737-.108-.03-1.723-.043-5.296-.041-4.398.003-5.164.012-5.305.062'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFileMinusBent);
export default ForwardRef;
