import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgPaintBoard = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M9.039 6.059c-.435.14-.857.575-.985 1.017-.095.326-.059.771.087 1.069.146.3.416.568.72.717.216.107.277.118.639.118s.423-.011.639-.118c.306-.149.574-.417.723-.723.107-.216.118-.277.118-.639s-.011-.423-.118-.639a1.618 1.618 0 0 0-.719-.721c-.195-.096-.297-.118-.58-.128-.22-.007-.408.01-.524.047m7.631 2.462c-.447.113-.84.441-1.043.871-.111.235-.126.309-.126.608s.015.373.126.608c.162.341.424.603.765.765.235.111.309.126.608.126s.373-.015.608-.126c.341-.162.603-.424.765-.765.111-.235.126-.309.126-.608s-.015-.373-.126-.608a1.529 1.529 0 0 0-1.279-.893 1.773 1.773 0 0 0-.424.022m-9.157 5.554c-.434.174-.768.493-.918.877-.123.316-.123.781.001 1.098.125.32.423.635.756.799.244.12.298.131.648.131.35 0 .404-.011.648-.131.542-.267.846-.751.846-1.349s-.304-1.082-.846-1.349c-.228-.112-.314-.132-.607-.141-.259-.008-.386.008-.528.065'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPaintBoard);
export default ForwardRef;
