import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgCamera = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M9.645 2.286c-.558.08-1.232.442-1.604.86-.094.107-.457.622-.807 1.144l-.635.95-.329.001c-.935.003-1.64.157-2.37.518-.585.289-.905.527-1.367 1.018a4.64 4.64 0 0 0-1.252 2.675c-.055.44-.055 7.656 0 8.096.141 1.124.56 1.971 1.38 2.791.82.82 1.667 1.239 2.791 1.38.446.056 12.65.056 13.096 0 1.124-.141 1.971-.56 2.791-1.38.82-.82 1.239-1.667 1.38-2.791.055-.44.055-7.656 0-8.096a4.64 4.64 0 0 0-1.252-2.675c-.462-.491-.782-.729-1.367-1.018-.73-.361-1.435-.515-2.37-.518l-.329-.001-.635-.95c-.35-.522-.713-1.037-.807-1.144-.387-.436-1.042-.778-1.652-.863-.381-.053-4.289-.05-4.662.003m4.717 1.551c.323.123.458.255.839.825.198.295.359.545.359.557 0 .012-1.602.021-3.56.021s-3.56-.009-3.56-.021c0-.012.161-.262.359-.557.377-.564.515-.7.829-.823.179-.07.336-.075 2.362-.077 2.047-.002 2.181.002 2.372.075m4.632 3.074c.541.188.892.408 1.29.805.397.398.617.749.805 1.29l.131.374v8.24l-.131.374a3.104 3.104 0 0 1-.805 1.29c-.403.402-.77.632-1.293.81l-.371.126H5.38l-.371-.126a3.108 3.108 0 0 1-1.293-.81A3.077 3.077 0 0 1 2.912 18l-.132-.38V9.38L2.912 9c.073-.209.205-.504.295-.655A3.826 3.826 0 0 1 4.214 7.29c.31-.205.861-.43 1.194-.486.119-.02 3.057-.033 6.712-.03l6.5.006.374.131m-7.608 2.888c-1.173.213-2.208.973-2.726 2.001-.746 1.483-.449 3.233.749 4.403.457.446 1.013.752 1.724.948.348.096 1.386.096 1.734 0 .709-.195 1.244-.491 1.721-.949a3.735 3.735 0 0 0-.931-6.056c-.499-.25-.922-.352-1.537-.368a5.343 5.343 0 0 0-.734.021m1.314 1.569c.659.217 1.247.813 1.452 1.472.093.301.093 1.019 0 1.32a2.625 2.625 0 0 1-.552.906 2.225 2.225 0 0 1-3.2 0 2.625 2.625 0 0 1-.552-.906c-.093-.301-.093-1.019 0-1.32.194-.623.733-1.196 1.359-1.443.425-.168 1.035-.179 1.493-.029'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCamera);
export default ForwardRef;