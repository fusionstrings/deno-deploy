FROM mcr.microsoft.com/vscode/devcontainers/base:debian-11

ENV DENO_VERSION=1.14.0
ENV DEPLOYCTL_VERSION=0.4.0
ENV DENO_STD_LIB_VERSION=0.107.0
ENV DENO_INSTALL=/deno

RUN mkdir -p ${DENO_INSTALL} \
    && curl -fsSL https://deno.land/x/install/install.sh | sh -s v${DENO_VERSION}
    #&& chown -R vscode ${DENO_INSTALL}

ENV PATH=${DENO_INSTALL}/bin:${PATH} \
    DENO_DIR=${DENO_INSTALL}/.cache${DENO_INSTALL}

RUN deno install --allow-read --allow-write --allow-env --allow-net --allow-run --no-check -r -f --root ${DENO_INSTALL} https://deno.land/x/deploy@${DEPLOYCTL_VERSION}/deployctl.ts
# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#    && apt-get -y install --no-install-recommends <your-package-list-here>