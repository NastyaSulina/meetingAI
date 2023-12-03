#!/usr/bin/env sh

docker login --username oauth --password ${OAUTH} cr.yandex

docker build --build-arg key="${KEY}" --build-arg chain="${FULL_CHAIN}" . -t cr.yandex/${REGISTRY_ID}/frontend:v${VERSION_NUMBER}

docker push cr.yandex/${REGISTRY_ID}/frontend:v${VERSION_NUMBER}