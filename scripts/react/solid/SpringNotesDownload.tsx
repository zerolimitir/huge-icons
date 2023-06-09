import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgSpringNotesDownload = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M7.979.814c-.166.075-.366.313-.417.495-.023.083-.042.495-.042.915v.764l-.43.025a4.002 4.002 0 0 0-2.632 1.164c-.498.49-.87 1.146-1.069 1.883-.087.32-.087.322-.1 6-.009 4.046 0 5.772.032 6 .088.629.394 1.361.774 1.853.589.761 1.342 1.244 2.337 1.498l.348.089h5.48c4.983 0 5.507-.006 5.78-.067.782-.175 1.433-.514 1.969-1.027.526-.502.838-.982 1.056-1.622.222-.65.215-.448.214-6.538-.002-4.536-.012-5.685-.056-5.928a4.012 4.012 0 0 0-3.003-3.201 5.141 5.141 0 0 0-.75-.104l-.43-.025v-.806c0-.779-.003-.813-.099-1.004a.88.88 0 0 0-.242-.294.867.867 0 0 0-.672-.086c-.18.059-.409.311-.464.509-.023.084-.043.499-.043.923V3H9.04v-.812c0-.785-.003-.819-.099-1.01-.133-.265-.322-.39-.615-.406a.845.845 0 0 0-.347.042m4.593 8c.171.071.373.307.426.495.026.097.042.914.042 2.269v2.117l.43-.423c.343-.338.465-.433.603-.47a.734.734 0 0 1 .918.635c.035.363-.015.437-.866 1.287-.658.657-.828.804-1.049.912a1.73 1.73 0 0 1-1.544.026c-.19-.088-.381-.255-1.062-.933-.906-.902-.985-1.015-.933-1.338a.731.731 0 0 1 .723-.631c.283 0 .429.085.858.502l.399.387.011-2.175c.011-1.937.019-2.187.078-2.294.085-.152.265-.324.394-.375a.932.932 0 0 1 .572.009'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSpringNotesDownload);
export default ForwardRef;
